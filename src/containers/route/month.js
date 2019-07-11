import React from 'react'

import WithMonth from "../calendar/withMonth";


import '../../css/responsibleRecomendation.css'

class Month extends React.Component {
    render() {
        return (
            <div>
                <WithMonth />
            </div>
        )
    }
}
export default Month;