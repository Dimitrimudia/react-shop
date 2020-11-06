import {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import { Grid, Button, Header, Form, Input} from 'semantic-ui-react';

class Login extends Component
{
    
    state = 
    {
        user : { login:'', password:''},
        agreed : false,
        loader :false,
        error : false,
        url : "http://localhost:4000/api/auth/login"
    }

    handleChange = event =>{

        const { name, value} = event.target; 
        let form = this.state.user;
        form[name] = value;
        this.setState({ form })

    }

    onConnexion  = async (data)=>{
        await axios.post(this.state.url, {
            email : data.login,
            password : data.password
        }).then(response => {
            const user = response.data;
            this.setState({ user })
            return true;
        
        }).catch(error => {

            console.log(error);
            return false;

        })
        
    }

    onFormSubmit = event =>
    {
            event.preventDefault();
            this.setState({loader : true})
            if(this.formvalidation())
            {
                if(this.onConnexion(this.state.user))
                {
                    this.setState({loader : false})
                    this.props.history.push('/Home');
                }
                else
                {
                    this.setState({loader : false})
                }
            }
            else
            {
                
            }
    }

    formvalidation = ()=>{

            if(document.getElementsByName("login")[0].value === '' || document.getElementsByName("password")[0].value === '')
            {
                return false;
            }
            else
            {
                return true;
            }
    }

    clearFormfields = ()=>{
        this.setState({

            user : {login:"", password:""}

        });
        document.querySelector(".form").reset();

    }

     render()
     {
            return <div className="ui wrapper">
                { this.state.loader ? <Loader />: ""}
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={5}> </Grid.Column>
                        <Grid.Column width={6}>
                            <Header as="h2"> Se Connecter</Header>
                            <Form>
                                <Form.Field>
                                    <label>Identifiant</label>
                                    <Input icon="user" name="login" iconPosition='left' placeholder='dimitrimudia@gmail.com'  onChange ={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Mot de passe</label>
                                    <Input icon="lock" type="password" name="password" iconPosition='left' placeholder='Mot de passe'  onChange ={this.handleChange} />
                                </Form.Field>
                                <Form.Field>
                                    <div className="linkContainer">
                                        <Link className="simpleLink" to="/Register">S'enregistrer</Link>
                                    </div>
                                </Form.Field>
                                <Button className="ui primary button submit-button" type='submit' onClick={this.onFormSubmit} >Connexion</Button>
                            </Form>
                           
                        </Grid.Column>
                        <Grid.Column width={5}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
     }
}

export default Login