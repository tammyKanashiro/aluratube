import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

// Custom hook
const useForm = (props) => {
    const { initialValues } = props;
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        setFormValues({ ...formValues, [name]: value });
    }

    const cleanForm = () => {
        setFormValues({ title: "", url: "" });
    }

    return { formValues, handleChange, cleanForm };
}

export default function RegisterVideo() {
    const formRegister = useForm({
        initialValues: { title: "", url: "" }
    });
    const [formVisible, setFormVisible] = useState(false);

    // const handleTitleChange = e => {
    //     formRegister.setFormValues({ ...formRegister.formValues, title: e.target.value });
    // }

    // const handleUrlChange = e => {
    //     formRegister.setFormValues({ ...formRegister.formValues, url: e.target.value });
    // }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formRegister.formValues);

        formRegister.cleanForm();
        setFormVisible(false);
    }

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisible(true)}>
                +
            </button>

            {formVisible &&
                <form onSubmit={handleSubmit}>
                    <div>
                        <button
                            type="button"
                            className="close-modal"
                            onClick={() => {
                                setFormVisible(false);
                                formRegister.cleanForm();
                            }}
                        >
                            x
                        </button>
                        <input
                            type="text"
                            name="title"
                            placeholder="Video title"
                            value={formRegister.formValues.title}
                            onChange={formRegister.handleChange}
                        />
                        <input
                            type="text"
                            name="url"
                            placeholder="Video url"
                            value={formRegister.formValues.url}
                            onChange={formRegister.handleChange}
                        />
                        <button type="submit">Register</button>
                    </div>
                </form>
            }
        </StyledRegisterVideo>
    )
}