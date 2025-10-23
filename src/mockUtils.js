import React from 'react';
import { stringify } from 'querystring';
import { joinClasses } from './joinClasses';

class MockClientUtils {
    setStoreInfo(data = {}) {
        this.storeInformation = {
            ...this.storeInformation,
            ...data,
        };
    }
    reset() {
        delete this.storeInformation;
    }
    bag = {
        create: jest.fn(() => Promise.resolve()),
    };
    cart = {
        addContactAndShipping: jest.fn(() => Promise.resolve()),
        create: jest.fn(() => Promise.resolve()),
        get: jest.fn(() => Promise.resolve()),
        placeApplePayOrder: jest.fn(() => Promise.resolve()),
    };
    categories = {
        get: jest.fn(() => Promise.resolve()),
        getById: jest.fn(() => Promise.resolve()),
        getBySlug: jest.fn(() => Promise.resolve()),
    };
    contentPages = { getBySeoFriendlyName: jest.fn(() => Promise.resolve()) };
    menus = { get: jest.fn(() => Promise.resolve()) };
    products = {
        getByCategoryId: jest.fn(() => Promise.resolve()),
        getById: jest.fn(() => Promise.resolve()),
        getBySlug: jest.fn(() => Promise.resolve()),
        getRelatedById: jest.fn(() => Promise.resolve()),
        getRelatedBySlug: jest.fn(() => Promise.resolve()),
        getWithChildCategories: jest.fn(() => Promise.resolve()),
        search: jest.fn(() => Promise.resolve()),
    };
    request = jest.fn(() => Promise.resolve());
    storeInformation = {
        acceptsStripeAsPayment: false,
        launched: false,
        name: 'Volt Store',
        paymentAutoCapture: false,
        seo: { platformMetaTags: {} },
        socialNetworks: {},
        storeUrl: 'https://mock-example.myvolusion.com',
        tenant: 'MOCK_TENANT_ID',
        thirdPartyIntegrations: {},
        applePay: {},
        authorizeNet: {},
        paypal: {},
        favicon: '',
        logo: {
            imagePath:
                'v1579715133/5d0bd834bd7d6e2d83cac6bc/fx3jlhu4lv3ispnumuap.png',
            uriBase: 'https://res.cloudinary.com/dyx4yhvoq/image/upload/',
        },
    };
    tenant = 'MOCK_TENANT_ID';
}

export const mockUtils = {
    addAmpScript: jest.fn(),
    addLink: jest.fn(),
    addScript: jest.fn(),
    canonicalUrl: jest.fn((queryParams = {}) => {
        const searchString = stringify(queryParams);
        const globalWindow = global || {};
        const { location = {} } = globalWindow;
        const { origin = 'http://localhost', pathname = '/' } = location;
        const queryString = searchString ? '?' + searchString : '';
        return origin + pathname + queryString;
    }),
    client: new MockClientUtils(),
    events: {
        cart: {
            addToCart: 'cart.addToCart',
            askForStripeKey: 'cart.askForStripeKey',
            askForTotalItems: 'cart.askForTotalItems',
            askIfLoaded: 'cart.askIfLoaded',
            itemAddedToCart: 'cart.itemAddedToCart',
            itemRemovedFromCart: 'cart.itemRemovedFromCart',
            openAccountPanel: 'cart.openAccountPanel',
            openCart: 'cart.openCart',
            replyWithLoaded: 'cart.replyWithLoaded',
            replyWithStripeKey: 'cart.replyWithStripeKey',
            replyWithTotalItems: 'cart.replyWithTotalItems',
            updateCartCount: 'cart.updateCartCount',
        },
    },
    pubSub: {
        clearAllSubscriptions: jest.fn(),
        clearSubscriptions: jest.fn(),
        countSubscriptions: jest.fn(),
        getSubscriptions: jest.fn(),
        immediateExceptions: jest.fn(),
        publish: jest.fn(),
        publishSync: jest.fn(),
        subscribe: jest.fn(),
        subscribeAll: jest.fn(),
        subscribeOnce: jest.fn(),
        unsubscribe: jest.fn(),
    },
    seo: {
        setTitle: jest.fn(),
        setDescription: jest.fn(),
        addExtraTag: jest.fn(),
    },
    storeUrl: 'http://localhost',
    throwNotFound: jest.fn(),
    v1Client: {
        colors: { primary: '#000' },
        currencySymbol: '$',
        isLoggedIn: false,
        logo: {
            text: 'Logo',
            publicId: '',
            url:
                'https://res.cloudinary.com/dyx4yhvoq/image/upload/v1579715133/5d0bd834bd7d6e2d83cac6bc/fx3jlhu4lv3ispnumuap.png',
        },
        seo: {
            defaultDescription: '',
            defaultOverrideMetaTags: '',
            defaultTitle: '',
            globalMetaTags: '',
        },
    },
    DEPRECATED_getLegacyButton: () => ({
        buttonStyle = 'primary',
        children,
        className,
        href,
        ...rest
    }) => {
        const btnClasses = joinClasses(buttonStyle, className);
        return href ? (
            <a className={btnClasses} href={href} {...rest}>
                {children}
            </a>
        ) : (
            <button className={btnClasses} {...rest}>
                {children}
            </button>
        );
    },
};
