import React from 'react'
import { connect } from "react-redux"
import { store } from '../../index'
import useSubCategoriesPage from './useSubCategoriesPage';


function SubCategoriesPage(props) {
    const { name } = props
    const { socialSettings } = props.AppState
    const relatedPhrases = useSubCategoriesPage(name, socialSettings)
    


    return (
        <section
            className='phrase-page-container'
            onClick={(e) => {
            }}
        >
            {relatedPhrases && relatedPhrases}
        </section>
    )
}

const mapStateToProps = () => {
    return store.getState()
}
export default connect(mapStateToProps)(SubCategoriesPage);