import PropTypes from 'prop-types';

const Checkbox = ({ children, required, label, setData, value, name, index }) => {
   
    return (
        <>

            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-500">
    <input required={required} checked={value} id={"bordered-radio-" + index} type="checkbox" name={name} onChange={(e) => { setData(e)  }}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor={"bordered-radio-" + index} className="w-full py-4 ms-2 text-sm font-medium text-c-gray-600 ">{label || children}</label>
</div>      
        </>
    )
}
Checkbox.propTypes = {
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    setData:PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};
export default Checkbox;