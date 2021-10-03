import React from 'react';

const Postdetails = (props) => {
    console.log(props.match.params.id);
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                {props.match.params.id} Details Page
            </div>
            <div className="panel-body">
                <p>
                   <b>{props.match.params.id}</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </div>
    )
}

export default Postdetails;