import React from 'react';

const Table = props => {
    const eligible = props.shortcuts.filter(s => props.selectedTags.has(s.appName))
    // TODO - proper ids for keys

    return (
      <table>
        <tbody>
          <tr>
            <th>Action</th>
            <th>Keys</th>
          </tr>
          {
            eligible.map((s, i) =>
              s.action.toLowerCase().includes(props.textInput)
              ? <tr key={i} data-app={s.appName || ''} data-cat={s.category || ''}>
                <td className="cell-desc" style={{color:`${props.selectedTags.get(s.appName)}`}}>
                  <span className="cell-desc-text">{s.action || ''}</span>
                </td>
                <td className="cell-key">{s.key || ''}</td>
              </tr>
              : null
            )
          }
        </tbody>
      </table>
    )
  }


export default Table;
