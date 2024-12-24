document.addEventListener('click', function(event) {
    if (window.location.href !== 'https://www.google.com/') {
        event.preventDefault(); // Prevent the default action (navigation)
        
        // Get the closest anchor element (if any)
        const anchor = event.target.closest('a');
        
        if (anchor) {
            const intendedUrl = anchor.href; // Get the intended URL
            
            try {
                // Parse the intended URL to get the base domain
                const url = new URL(intendedUrl);
                const domain = url.origin; // e.g., "https://www.example.com"
                
                // Redirect to the 404 page of the intended website
                window.location.href = domain + '/404'; // e.g., "https://www.example.com/404"
                
            } catch (error) {
                console.error('Invalid URL:', intendedUrl);
                // Optionally, you could redirect to a fallback 404 page here
                window.location.href = '/404';
                
            }
        } else {
            console.error('No anchor element clicked.');
        }
    
    }
}, true);
