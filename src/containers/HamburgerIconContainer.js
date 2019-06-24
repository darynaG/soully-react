import{
    hideMobileNavMenu,
    showMobileNavMenu
    
}from '../actions/index'
import {connect} from 'react-redux'
import BurgerIcon from '../components/header/BurgerIcon'

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        onHideMobileNavMenu: () => dispatch(hideMobileNavMenu()),
        onShowMobileNavMenu: () => dispatch(showMobileNavMenu())
    }
};
const HamburgerIconContainer = connect(mapStateToProps,mapDispatchToProps)(BurgerIcon);
export default HamburgerIconContainer;