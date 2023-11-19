import Cell from './Cell';
const Row = ({item}) => {

  return (
    <tr>
      {item.map((data, index)=>{
        const string = JSON.stringify(data);
        return (
          <Cell key={data+index}>
            {string}
          </Cell>
        )
      })}
    </tr>
  )
}

export default Row