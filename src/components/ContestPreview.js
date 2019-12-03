import React from 'react';

const ContestPreview = (contest) =>{
    return(
    <div className="ContestPreview">
        <div>
            {contest.categoryName}
        </div>
        <div>
            {contest.contestName}
        </div>
    </div>
     );
}

export default ContestPreview;
