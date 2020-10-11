
import React from 'react'

function Entries({ entry }) {
  const { author, date, content, mood } = entry

    return (
      <div className="entry">
        
        <div className="entry_head">
          <div className="entry_info">
            <div className="author_name">{ author.name }</div>
            <div className="entry_date">{ date }</div>
            <div className="entry_mood">{ mood }</div>
          </div>
        </div>

      <p className="entry_content">{ content }</p>
      </div>
    )
  }

export default Entries
