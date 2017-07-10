import React from 'react';

const Table = props => {
    const eligible = props.shortcuts.filter(s => props.selectedTags.has(s.appName))
    // TODO - proper ids for keys

    return (
      <table>
        <tr>
          <th>Action</th>
          <th>Keys</th>
        </tr>
        <tbody>
          {
            eligible.map((s, i) =>
              s.action.toLowerCase().includes(props.textInput)
              ? <tr key={i} data-app={s.appName || ''} data-cat={s.category || ''}>
                <td className="cell-desc">{s.action || ''}</td>
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
