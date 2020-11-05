import react, {Component} from 'react';
import { Grid, Button,Checkbox, Header, Form, Input} from 'semantic-ui-react';
class RegisterForm extends Component {
   
    state = 
    {
        user : {}
    }

    render()
    {
       console.log(this.props);
        return <div className="ui container"> 
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}> </Grid.Column>
                            <Grid.Column width={10}>
                                <Header as="h2"> S'enregistrer</Header>
                            </Grid.Column>
                            <Grid.Column width={3}> </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>;
    }
}

export default RegisterForm;