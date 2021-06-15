import React from 'react';

const referensData = [
    {
    message: 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more:',
    user:{
        name: 'Nataly',
        course: 'coderhouse',
    }
    },
    {
     message: 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more:',
        user:{
            name: 'Juan',
            course: 'coderhouse',

        }
        },
        {
            message: 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more:',
            user:{
                name: 'Matias',
                course: 'coderhouse',

            }
            },
]


export class CardContainer extends React.Component {

    state =
    { 
        referens: referensData,
    }  

render() {
    return(
    <div>
        Container Card
        {this.state.referens.map((item) => 
        <div>{item.message}</div>)
        }
    </div>)
}
}


