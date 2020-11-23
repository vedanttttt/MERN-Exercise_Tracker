import React,{Component} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class CreateExercise extends Component{
    constructor(props){
        super(props)

        this.state={
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: []
        }

        this.onChange = this.onChange.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    onChange(e){
        const {name,value} = e.target;
        this.setState({
            [name] : value
        });
    }

    onChangeDate(date){
        this.setState({
            date: date
        })
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        window.location= '/';
    }

    render(){
        return(
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                <label>Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    name="username"
                    onChange={this.onChange}>
                    {
                        this.state.users.map(function(user) {
                        return <option 
                            key={user}
                            value={user}>{user}
                            </option>;
                        })
                    }
                </select>
                </div>
                <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    name= "description"
                    value={this.state.description}
                    onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                <label>Duration (in minutes): </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.duration}
                    name="duration"
                    onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                <label>Date: </label>
                <div>
                    <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                    />
                </div>
                </div>

                <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}

export default CreateExercise