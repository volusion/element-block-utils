import React from 'react';
import { stringify } from 'querystring';
import { joinClasses } from './joinClasses';

class MockClientUtils {
    setStoreInfo(data = {}) {
        this.storeInformation = {
            ...this.storeInformation,
            ...data
        };
    }
    reset() {
        delete this.storeInformation;
    }
    bag = {
        create: jest.fn(() => Promise.resolve())
    };
    cart = {
        addContactAndShipping: jest.fn(() => Promise.resolve()),
        create: jest.fn(() => Promise.resolve()),
        get: jest.fn(() => Promise.resolve()),
        placeApplePayOrder: jest.fn(() => Promise.resolve())
    };
    categories = { get: jest.fn() };
    contentPages = { getBySeoFriendlyName: jest.fn() };
    menus = { get: jest.fn() };
    products = {
        getByCategoryId: jest.fn(),
        getById: jest.fn(),
        getBySlug: jest.fn(),
        getRelatedById: jest.fn(),
        getRelatedBySlug: jest.fn(),
        getWithChildCategories: jest.fn(),
        search: jest.fn()
    };
    request = () => jest.fn();
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
            uriBase: 'https://res.cloudinary.com/dyx4yhvoq/image/upload/'
        }
    };
    tenant = 'MOCK_TENANT_ID';
}

export const mockUtils = {
    addAmpScript: jest.fn(),
    addLink: jest.fn(),
    addScript: jest.fn(),
    canonicalUrl: jest.fn(queryParams => {
        const searchString = stringify(queryParams);
        const { origin, pathname } = window.location;
        const queryString = searchString ? '?' + searchString : '';
        return origin + pathname + queryString;
    }),
    client: new MockClientUtils(),
    events: {
        cart: {
            addToCart: 'cart.addToCart',
            itemAddedToCart: 'cart.itemAddedToCart',
            itemRemovedFromCart: 'cart.itemRemovedFromCart',
            openAccountPanel: 'cart.openAccountPanel',
            openCart: 'cart.openCart',
            updateCartCount: 'cart.updateCartCount'
        }
    },
    pubSub: {
        subscribe: jest.fn(),
        publish: jest.fn()
    },
    seo: {
        setTitle: jest.fn(),
        setDescription: jest.fn(),
        addExtraTag: jest.fn()
    },
    throwNotFound: jest.fn(),
    DEPRECATED_getLegacyButton: () => ({
        className,
        buttonStyle = 'primary',
        ...props
    }) => (
        <a className={joinClasses(buttonStyle, className)} {...props}>
            {props.children}
        </a>
    )
};
