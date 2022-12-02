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
                    <a href="index.html" data-type="index-link">apps-workspace documentation</a>
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
                                <a href="modules/SharedAppsStorybookModule.html" data-type="entity-link" >SharedAppsStorybookModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedAppsUiContactCardModule.html" data-type="entity-link" >SharedAppsUiContactCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedAppsUiContactCardModule-29b062c190df041b78ceb47f5fe9853c1be2c27eabec85829fb958045d6f4cd845ad00dc192b3f51e0a686752372527e3612a5cc0dd85ff6ddf4702b20e5c32d"' : 'data-target="#xs-components-links-module-SharedAppsUiContactCardModule-29b062c190df041b78ceb47f5fe9853c1be2c27eabec85829fb958045d6f4cd845ad00dc192b3f51e0a686752372527e3612a5cc0dd85ff6ddf4702b20e5c32d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedAppsUiContactCardModule-29b062c190df041b78ceb47f5fe9853c1be2c27eabec85829fb958045d6f4cd845ad00dc192b3f51e0a686752372527e3612a5cc0dd85ff6ddf4702b20e5c32d"' :
                                            'id="xs-components-links-module-SharedAppsUiContactCardModule-29b062c190df041b78ceb47f5fe9853c1be2c27eabec85829fb958045d6f4cd845ad00dc192b3f51e0a686752372527e3612a5cc0dd85ff6ddf4702b20e5c32d"' }>
                                            <li class="link">
                                                <a href="components/ContactCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedAppsUiHeaderModule.html" data-type="entity-link" >SharedAppsUiHeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedAppsUiHeaderModule-049169edb4bba9efdad97a46b9c6a81e45e7cd88a8ba587aad71dc9d4ab98cde2d028bba2929b2ee0c81d3d215fa989ad9b689e9559e71ab10ee76f0264d7197"' : 'data-target="#xs-components-links-module-SharedAppsUiHeaderModule-049169edb4bba9efdad97a46b9c6a81e45e7cd88a8ba587aad71dc9d4ab98cde2d028bba2929b2ee0c81d3d215fa989ad9b689e9559e71ab10ee76f0264d7197"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedAppsUiHeaderModule-049169edb4bba9efdad97a46b9c6a81e45e7cd88a8ba587aad71dc9d4ab98cde2d028bba2929b2ee0c81d3d215fa989ad9b689e9559e71ab10ee76f0264d7197"' :
                                            'id="xs-components-links-module-SharedAppsUiHeaderModule-049169edb4bba9efdad97a46b9c6a81e45e7cd88a8ba587aad71dc9d4ab98cde2d028bba2929b2ee0c81d3d215fa989ad9b689e9559e71ab10ee76f0264d7197"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedAppsUiOrderCardModule.html" data-type="entity-link" >SharedAppsUiOrderCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedAppsUiOrderCardModule-a025178cfd43ccffe78d86c4875689a776de3fb73594933c2422020c59007035563aac0e57331379f4d8342a47870d308dfcb2a4423a0170e70fc108d6eeb3b7"' : 'data-target="#xs-components-links-module-SharedAppsUiOrderCardModule-a025178cfd43ccffe78d86c4875689a776de3fb73594933c2422020c59007035563aac0e57331379f4d8342a47870d308dfcb2a4423a0170e70fc108d6eeb3b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedAppsUiOrderCardModule-a025178cfd43ccffe78d86c4875689a776de3fb73594933c2422020c59007035563aac0e57331379f4d8342a47870d308dfcb2a4423a0170e70fc108d6eeb3b7"' :
                                            'id="xs-components-links-module-SharedAppsUiOrderCardModule-a025178cfd43ccffe78d86c4875689a776de3fb73594933c2422020c59007035563aac0e57331379f4d8342a47870d308dfcb2a4423a0170e70fc108d6eeb3b7"' }>
                                            <li class="link">
                                                <a href="components/OrderCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedAppsUiSubSharedModule.html" data-type="entity-link" >SharedAppsUiSubSharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedAppsUiSubSharedModule-e325e9b11955ad6be025c31e50eede586f317fb73ab56ff1d52e35fe7520f476746ea83c4e2c6e361b69e71caacda973cf7128fade3b2b0b56759c708032c7d6"' : 'data-target="#xs-components-links-module-SharedAppsUiSubSharedModule-e325e9b11955ad6be025c31e50eede586f317fb73ab56ff1d52e35fe7520f476746ea83c4e2c6e361b69e71caacda973cf7128fade3b2b0b56759c708032c7d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedAppsUiSubSharedModule-e325e9b11955ad6be025c31e50eede586f317fb73ab56ff1d52e35fe7520f476746ea83c4e2c6e361b69e71caacda973cf7128fade3b2b0b56759c708032c7d6"' :
                                            'id="xs-components-links-module-SharedAppsUiSubSharedModule-e325e9b11955ad6be025c31e50eede586f317fb73ab56ff1d52e35fe7520f476746ea83c4e2c6e361b69e71caacda973cf7128fade3b2b0b56759c708032c7d6"' }>
                                            <li class="link">
                                                <a href="components/SkeletonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkeletonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SvgIconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SvgIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserInitialsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInitialsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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