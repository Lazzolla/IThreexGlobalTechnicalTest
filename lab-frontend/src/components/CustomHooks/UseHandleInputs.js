import { useState } from 'react'

const useHandleInputs = (filterStateInitial = {}) => {
    const [filterState, setFilterState] = useState(filterStateInitial)

// A hook to handle inputs all around the app

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFilterState({
            ...filterState,
            [name]: value
        })
    }
    return { filterState, handleChange, setFilterState }
}

export default useHandleInputs