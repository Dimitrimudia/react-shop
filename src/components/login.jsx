import react, {Component} from 'react';
import { Grid, Button,Checkbox, Header, Form, Icon, Input} from 'semantic-ui-react';

class Login extends Component
{
    
    state = 
    {
        user : { login:'', password:''},
        agreed : false
    }
     render()
     {
            return <div className="ui wrapper">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}> </Grid.Column>
                        <Grid.Column width={10}>
                            <Header as="h2"> Se Connecter</Header>
                            <Form>
                                <Form.Field>
                                    <label>Identifiant</label>
                                    <Input icon="user" name="login" iconPosition='left' placeholder='dimitrimudia@gmail.com' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Mot de passe</label>
                                    <Input icon="lock" type="password" name="password" iconPosition='left' placeholder='Mot de passe' />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox label='I agree to the Terms and Conditions' />
                                </Form.Field>
                                <Button className="ui primary button submit-button" type='submit'>Connexion</Button>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={3}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
     }
}

export default Login