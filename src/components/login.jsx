import react, {Component} from 'react';
import { Grid, Button,Checkbox, Header, Form} from 'semantic-ui-react';

class Login extends Component
{
    

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
                                    <input name="login"  placeholder='Identifiant' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Mot de passe</label>
                                    <input name="password"  placeholder='Mot de passe' />
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