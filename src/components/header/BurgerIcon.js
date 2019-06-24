import React from 'react'

class BurgerIcon extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        const { showSideBarMenu, onShowMobileNavMenu, onHideMobileNavMenu } = this.props;
        showSideBarMenu ? onShowMobileNavMenu() : onHideMobileNavMenu();
    }
    render() {
        return(
            <div>
                <a href = "#">
                <span>home</span>
                <span>day</span>
                <span>month</span>
                <span>stories</span>
                <span>log out</span>
                </a>

            </div>

        );

}
}
export default BurgerIcon;