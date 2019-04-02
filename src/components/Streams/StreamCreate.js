import React from 'react';
import {Field, reduxForm} from 'redux-form'

class StreamCreate extends React.Component{
    renderInput(formProps){
        console.log('formProps',formProps)
        return(
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input}/>
                <div>{formProps.meta.error}</div>
            </div>
            
        )

    }
    onSubmit(formValues){
        console.log('form value', formValues)

    }
    render(){
        //console.log("props in StreamCreate",this.props)
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description"  component={this.renderInput} label="Enter Description"/>
                <button>Submit</button>
            </form>
            
        )   
    }
}

const validate=(formValue)=>{
    const errors = {};

    if(!formValue.title){
        errors.title="You must enter a title"
    }

    if (!formValue.description){
        errors.description="You must enter description"
    }

    return errors;
}

export default reduxForm({
    form:'streamCreate',
    validate:validate
})(StreamCreate);