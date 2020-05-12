import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({feedback: event.target.value})
    }

    handleSubmit(event) {
        const templateId = 'template_WRxqcOta';

        this.sendFeedback(templateId, {
            to_name: "IU",
            message_html: this.state.feedback,
            from_name: "Dicky Julian Pratama",
            reply_to: "julian18.ech@gmail.com"
        });
    }

    sendFeedback(templateId, vars) {
        window.emailjs.send(
            'gmail', templateId, vars
        ).then(res => {
            console.log('Email successfully sent!')
        }).catch(err => console.error('Oh well, you failed.', err));
    }

    render() {
        return (
            <form className="test-mailing">
                <h1>Let's see if it works</h1>
                <div>
                    <textarea 
                        id="test-mailing" 
                        name="test-mailing" 
                        onChange={this.handleChange} 
                        placeholder="Post some lorem ipsum here"
                        value={this.state.feedback}
                        style={{width: '100%', height: '150px'}}
                        required 
                    />
                </div>
                <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
            </form>
        )
    }
}