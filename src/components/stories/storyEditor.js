import React from 'react';

import Messages from '../../data/posts';

const StoryEdit = (props) => {

    let input
    let divElement;
    var c1, c2, c3, c4;


    if (props.isMin === true) {
        c1 = "row-container";
        c2 = "story-text min";
        c3 = "round-btn min-btn";
        c4 = "story-sharer minimize";

    } else {
        c1 = "story-sharer";
        c2 = "story-text ";
        c3 = "round-btn ";
        c4 = "story-sharer ";

    }
    function getTodayDate() {
        let today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        return (yyyy + '-' + mm + '-' + dd);

    }


    divElement = <div className={c4} id="story">
        <form className="story-input" method="post" onSubmit={e => {
            e.preventDefault();
            let t = input.value;
            var a = {}
            let date = getTodayDate();
            if (t.replace(/\s/g, "") !== "") {
                a = {

                    "text": input.value,
                    "date": date
                }
                var j = JSON.stringify(a);

                Messages.newPost(j);

                input.value = '';
            }

        }}>
            <div className={c1}>
                <h5 className="h3-label" >Share your story</h5>
                <textarea className={c2} name="subject" placeholder="Write something.." ref={node => input = node} ></textarea>
                <button className={c3} type="submit" > Share</button>

            </div>
        </form>
    </div>


    return (divElement

    )
}
export default (StoryEdit);