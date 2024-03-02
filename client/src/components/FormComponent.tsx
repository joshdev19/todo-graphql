import { useLocation, useParams } from "react-router-dom"

const FormComponent = () => {

    const location = useLocation();
    const path = location.pathname;
    const { id } = useParams();

    return (
        <div className="form-wrapper">
            <form>
                <input type="text" placeholder="Title..." />
                <input type="text" placeholder="Description..." />
                <button type="button">
                    {
                        path.includes('/add') ?
                        "Add" :
                        "Update"
                    }
                </button>
            </form>
        </div>
    )
}

export default FormComponent