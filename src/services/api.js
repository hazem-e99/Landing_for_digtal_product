/**
 * API Configuration
 * =================
 * Centralized configuration for backend API calls
 */

// Backend API URL - Production on Render
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://digital-back-wx4v.onrender.com';

/**
 * Create a Stripe Checkout Session and redirect to payment
 * @returns {Promise<void>}
 */
export const initiateCheckout = async () => {
  try {
    console.log('🛒 Initiating checkout...');
    
    const response = await fetch(`${API_BASE_URL}/api/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();
    
    if (data.url) {
      console.log('✅ Redirecting to Stripe checkout...');
      window.location.href = data.url;
    } else {
      throw new Error('No checkout URL returned');
    }
  } catch (error) {
    console.error('❌ Checkout error:', error);
    // Fallback to direct Stripe link if API fails
    alert('حدث خطأ. جاري إعادة التوجيه...');
    window.location.href = 'https://buy.stripe.com/eVqaEY0hQ8aF3KXcY8dAk29';
  }
};

/**
 * Verify a payment session
 * @param {string} sessionId - Stripe session ID
 * @returns {Promise<Object>} - Payment verification result with products if paid
 */
export const verifyPaymentSession = async (sessionId) => {
  try {
    console.log('🔍 Verifying payment session:', sessionId);
    
    const response = await fetch(
      `${API_BASE_URL}/api/verify-session?session_id=${encodeURIComponent(sessionId)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to verify session');
    }

    const data = await response.json();
    console.log('📋 Verification result:', data.paid ? '✅ Paid' : '❌ Not Paid');
    
    return data;
  } catch (error) {
    console.error('❌ Verification error:', error);
    return { paid: false, error: error.message };
  }
};

/**
 * Check backend health
 * @returns {Promise<boolean>}
 */
export const checkBackendHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
};

export { API_BASE_URL };
