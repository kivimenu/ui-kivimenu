import React, { Component } from 'react'
import './how.css'

class How extends Component {
    render() {
        return (
            <div>
                <h1>Responsive CSS Tabs</h1>
                <div className="tab_container">
                    <input id="tab1" type="radio" name="tabs" defaultChecked/>
                    <label htmlFor="tab1"><i className="fa fa-code"></i><span>Code</span></label>

                    <input id="tab2" type="radio" name="tabs" />
                    <label htmlFor="tab2"><i className="fa fa-pencil-square-o"></i><span>About</span></label>

                    <input id="tab3" type="radio" name="tabs" />
                    <label htmlFor="tab3"><i className="fa fa-bar-chart-o"></i><span>Services</span></label>

                    <input id="tab4" type="radio" name="tabs" />
                    <label htmlFor="tab4"><i className="fa fa-folder-open-o"></i><span>Portfolio</span></label>

                    <input id="tab5" type="radio" name="tabs" />
                    <label htmlFor="tab5"><i className="fa fa-envelope-o"></i><span>Contact</span></label>

                    <section id="content1" className="tab-content">
                        <h3>Headline 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		      	cillum dolore eu fugiat nulla pariatur.</p>
                    </section>

                    <section id="content2" className="tab-content">
                        <h3>Headline 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </section>

                    <section id="content3" className="tab-content">
                        <h3>Headline 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </section>

                    <section id="content4" className="tab-content">
                        <h3>Headline 4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		      	tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		      	cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		      	consequat.</p>
                    </section>

                    <section id="content5" className="tab-content">
                        <h3>Headline 5</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </section>
                </div>

                <p className="no_wrap">
                    And Of-course this paragrapgh with not wrap Tab
                </p>

                <p className="link">
                    Just in case you want to go through the tutorial follow this link: <a href="http://www.sevensignature.com/blog/code/responsive-pure-css-tabs/">Responsive Pure CSS Tabs</a>
                </p>
            </div>
        )
    }
}

export default How
