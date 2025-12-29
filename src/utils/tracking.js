// Tracking utility functions for Meta and TikTok Pixels

/**
 * Track InitiateCheckout event when user clicks on buy button
 */
export const trackInitiateCheckout = () => {
  // Meta Pixel - InitiateCheckout
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', {
      currency: 'USD',
      value: 10.00,
      content_type: 'product',
      content_name: 'Digital Products Bundle'
    });
    console.log('✅ Meta Pixel: InitiateCheckout tracked');
  }

  // TikTok Pixel - InitiateCheckout
  if (typeof window.ttq !== 'undefined') {
    window.ttq.track('InitiateCheckout', {
      content_type: 'product',
      content_id: 'digital_bundle',
      content_name: 'Digital Products Bundle',
      quantity: 1,
      price: 10.00,
      value: 10.00,
      currency: 'USD'
    });
    console.log('✅ TikTok Pixel: InitiateCheckout tracked');
  }
};

/**
 * Track AddToCart event (optional - for more granular tracking)
 */
export const trackAddToCart = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'AddToCart', {
      currency: 'USD',
      value: 10.00,
      content_type: 'product',
      content_name: 'Digital Products Bundle'
    });
  }

  if (typeof window.ttq !== 'undefined') {
    window.ttq.track('AddToCart', {
      content_type: 'product',
      content_id: 'digital_bundle',
      value: 10.00,
      currency: 'USD'
    });
  }
};

/**
 * Track ViewContent event (for product page views)
 */
export const trackViewContent = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'ViewContent', {
      currency: 'USD',
      value: 10.00,
      content_type: 'product',
      content_name: 'Digital Products Bundle'
    });
  }

  if (typeof window.ttq !== 'undefined') {
    window.ttq.track('ViewContent', {
      content_type: 'product',
      content_id: 'digital_bundle',
      value: 10.00,
      currency: 'USD'
    });
  }
};
