import classes from './Container.module.css'
const TableContainer =(props)=>{

    return (
        <div className={classes.tableContainer}>
            {props.children}
        </div>
    )
}
export default TableContainer