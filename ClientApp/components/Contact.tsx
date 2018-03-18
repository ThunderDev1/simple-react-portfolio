import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Contact extends React.Component<RouteComponentProps<{}>, {}> {

    contactForm: HTMLFormElement;
    messageDiv: HTMLDivElement;

    handleSubmit(event: any) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('/contact', {
            method: 'POST',
            body: data,
        })
        .then(result => {
            this.contactForm.reset();
            this.showConfirmationMessage();
        });
    }

    showConfirmationMessage(){
        this.messageDiv.innerHTML = '<div class="fading-message">Your message was sent. Thank you</div>';
    }

    public render() {
        return <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="contact">
            <div className="my-auto">
                <h2 className="mb-5">Contact</h2>

                <form onSubmit={(event => this.handleSubmit(event))} ref={(form) => this.contactForm = form}>

                    <div className="message" ref={(el) => this.messageDiv = el }></div>

                    <div className="controls">

                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label>Name *</label>
                                    <input type="text" name="name" className="form-control" placeholder="eg. Peter Parker" required data-error="Name is required" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input type="email" name="email" className="form-control" placeholder="eg. peter.parker@gmail.com" required data-error="Incorrect email format" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <label>Message *</label>
                                    <textarea name="message" className="form-control" placeholder="Your message" rows={6} required data-error="Message is required"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <p className="text-muted"><strong>*</strong> Required fields</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <input type="submit" className="btn btn-success btn-send" value="Send" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>;
    }
}
