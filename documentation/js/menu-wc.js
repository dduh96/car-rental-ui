'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">car-rental-ui documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link" >ApiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-70209d24414245123f04c2c3df1ceff7dcfc344af392daaa2347989b0f61894b123e6d830c7c362389982abbaf2c9e6a79ef5c6d919398bac7f91bd4be839d2d"' : 'data-target="#xs-components-links-module-AppModule-70209d24414245123f04c2c3df1ceff7dcfc344af392daaa2347989b0f61894b123e6d830c7c362389982abbaf2c9e6a79ef5c6d919398bac7f91bd4be839d2d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-70209d24414245123f04c2c3df1ceff7dcfc344af392daaa2347989b0f61894b123e6d830c7c362389982abbaf2c9e6a79ef5c6d919398bac7f91bd4be839d2d"' :
                                            'id="xs-components-links-module-AppModule-70209d24414245123f04c2c3df1ceff7dcfc344af392daaa2347989b0f61894b123e6d830c7c362389982abbaf2c9e6a79ef5c6d919398bac7f91bd4be839d2d"' }>
                                            <li class="link">
                                                <a href="components/AddCarDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCarDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminCarsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminCarsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookCarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookCarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookingConfirmationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingConfirmationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarsItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarsItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderDetailDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderDetailDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderLoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderLoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Configuration.html" data-type="entity-link" >Configuration</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomHttpParameterCodec.html" data-type="entity-link" >CustomHttpParameterCodec</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link" >MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/WhiteSpaceValidator.html" data-type="entity-link" >WhiteSpaceValidator</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CarService.html" data-type="entity-link" >CarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrencyService.html" data-type="entity-link" >CurrencyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocationService.html" data-type="entity-link" >LocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OpeningHoursService.html" data-type="entity-link" >OpeningHoursService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthenticationResponse.html" data-type="entity-link" >AuthenticationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Car.html" data-type="entity-link" >Car</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationParameters.html" data-type="entity-link" >ConfigurationParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateLocationRequest.html" data-type="entity-link" >CreateLocationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credentials.html" data-type="entity-link" >Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetOrder.html" data-type="entity-link" >GetOrder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputSearch.html" data-type="entity-link" >InputSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocationOfRental.html" data-type="entity-link" >LocationOfRental</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocationOfReturn.html" data-type="entity-link" >LocationOfReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginAdminRequest.html" data-type="entity-link" >LoginAdminRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginOrderRequest.html" data-type="entity-link" >LoginOrderRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModelError.html" data-type="entity-link" >ModelError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OpeningHours.html" data-type="entity-link" >OpeningHours</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OpeningHours-1.html" data-type="entity-link" >OpeningHours</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateLocationRequest.html" data-type="entity-link" >UpdateLocationRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VehicleType.html" data-type="entity-link" >VehicleType</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});