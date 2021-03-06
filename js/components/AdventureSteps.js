import React from 'react';
import samples from '../adventures';
import Adventure from './Adventure';
import Adventures from './Adventures';
import api from '../parse/api';
import Step from './Step';



var AdventureSteps = React.createClass({
    getInitialState : function() {
        return {
            steps: []
        
        }
    },
    componentDidMount : function () {
        var currentComp = this;

        console.log(this.props.context);

        if (this.props.context === 'unsubscribed') {
            api.getFirstStep(this.props.adventure).then(function(step){
                var result = [];
                result.push(step);
                currentComp.setState({steps: result})
            });
        }
        else if (this.props.context === 'completed'){
            api.listStepsOfMission(this.props.adventure.id).then(function(result){
                currentComp.setState({steps:result})
                //console.log(result)
            })
        }
        else {
            api.getStepProgress(this.props.adventure).then(function(result){
                var steps = result.map(function(sub){
                    var step = sub.get('step');
                    step.completed=sub.get('completed');
                    console.log(step);
                    return step;
                })

                currentComp.setState({steps:steps});
            })
        }


        
    },
    render() {
        return (
            <div className="adventure__details">
                <div className="adventure__steps">
                
                    <ol>
                        {this.state.steps.map(function(stepParseObject, index) {
                            return <Step key={stepParseObject.id} index={index} details={stepParseObject}/>
                        })}
                    </ol>
                </div>
            </div>
        );
    }
});


export default AdventureSteps;


//


// <div className="adventure__steps">
//                         <ol>
//                             <li className="complete">fafdssdfa</li>
//                             <li className="current">dsafsdfasdfds</li>
//                             <li className="hidden">fdsafdsfadsfsd</li>
//                             <li className="hidden">fdsafdsfsa</li>
//                         </ol>
//                         <img src="http://placecorgi.com/450/450" />
                        
//                     </div>