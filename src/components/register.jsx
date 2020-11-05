import react, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Grid, Button,Checkbox, Header, Form, Input} from 'semantic-ui-react';
class RegisterForm extends Component {
   
    state = 
    {
        user : { name: '', email : '', password :'' },
        url : "http://localhost:4000/api/auth/signup"
    }

    onSignup = async  (data) =>
    {
        await axios.post(this.state.url, {
            name : data.identifiant,
            email : data.email,
            password : data.password
        })
        .then(response =>{
            console.log(response);
        }).catch(error =>{
            console.error(error);
        })
    }

    handleChange = event=>{

        const { name, value} = event.target; 
        let form = this.state.user;
        form[name] = value;
        this.setState({ form })
    }

    onFormSubmit = ()=>{

        if(this.formvalidation())
        {
                this.onSignup(this.state.user);
        }
    }

    formvalidation = ()=>{

        if(document.getElementsByName("password")[0].value === '' || document.getElementsByName("email")[0].value === '' || document.getElementsByName("identifiant")[0].value === '')
        {
            return false;
        }
        else
        {
            return true;
        }
}

    render()
    {
        return <div className="ui container"> 
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}> </Grid.Column>
                            <Grid.Column width={10}>
                                <Header as="h2"> S'enregistrer</Header>
                                <Form>
                                    <Form.Field>
                                        <label>Nom complet</label>
                                        <Input icon="user" name="identifiant" iconPosition='left' placeholder='Dimitri Marcel Mudiangondo'  onChange ={this.handleChange} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Adrese mail</label>
                                        <Input icon="at" name="email" iconPosition='left' placeholder='dimitrimudia@gmail.com'  onChange ={this.handleChange} />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Mot de passe</label>
                                        <Input icon="lock" type="text" name="password" iconPosition='left' placeholder='Mot de passe'  onChange ={this.handleChange} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox label='I agree to the Terms and Conditions' />
                                    </Form.Field>
                                    <Button className="ui primary button submit-button" type='submit' onClick={this.onFormSubmit} >S'enregistrer</Button>
                                </Form>
                                <div className="linkContainer">
                                    <Link className="simpleLink" to="/">Se connecter</Link>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}> </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>;
    }
}

export default RegisterForm;