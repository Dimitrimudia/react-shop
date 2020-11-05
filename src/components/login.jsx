import react, {Component} from 'react';
import { Grid, Button,Checkbox, Header, Form} from 'semantic-ui-react';

class Login extends Component
{
    

     render()
     {
            return <div className="ui container">
                <Header as="h4"> Conexion </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}> </Grid.Column>
                        <Grid.Column width={10}>
                            <Form>
                            <Form.Field>
                                <label>Login</label>
                                <input icon='user' iconPosition='left' placeholder='Login' />
                                </Form.Field>
                                <Form.Field>
                                <label>Password</label>
                                <input  placeholder='Password' />
                                </Form.Field>
                                <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions' />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={3}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
     }
}

export default Login