document.addEventListener('DOMContentLoaded', function() {
    // Mobile Filter Toggle
    const filterToggleBtn = document.querySelector('.filter-toggle-btn');
    const filterOptions = document.querySelector('.filter-options');
    
    if (filterToggleBtn && filterOptions) {
        filterToggleBtn.addEventListener('click', function() {
            filterOptions.classList.toggle('active');
        });
    }
    
    // Project Data - This would typically come from an API or database
    const projectsData = {
        'Amazon Rainforest Conservation': {
            id: 'amazon-conservation',
            title: 'Amazon Rainforest Conservation',
            location: 'Brazil',
            certification: 'verra',
            price: '$12.50',
            available: '250,000 tonnes',
            vintage: '2023-2024',
            type: 'Forestry & Conservation',
            tags: ['Forestry', 'Biodiversity', 'Indigenous Communities'],
            mainImage: 'images/amazon-project.svg',
            thumbnails: [
                'images/amazon-project.svg',
                'images/mangrove-project.svg',
                'images/biochar-project.svg'
            ],
            description: 'This project focuses on protecting over 150,000 hectares of pristine Amazon rainforest from deforestation and degradation. By working with local communities and implementing sustainable forest management practices, the project prevents the emission of millions of tonnes of carbon dioxide while preserving biodiversity and supporting indigenous livelihoods.',
            impact: {
                trees: '3.2 million',
                co2: '1.5 million tonnes',
                communities: '12'
            },
            certificationInfo: 'This project is certified by Verra under the Verified Carbon Standard (VCS). It has undergone rigorous third-party verification to ensure it delivers real, measurable, and additional carbon benefits.'
        },
        'Solar Farm in Kenya': {
            id: 'kenya-solar',
            title: 'Solar Farm in Kenya',
            location: 'Kenya',
            certification: 'gold-standard',
            price: '$9.75',
            available: '120,000 tonnes',
            vintage: '2022-2023',
            type: 'Renewable Energy',
            tags: ['Renewable Energy', 'Community Development', 'Clean Energy'],
            mainImage: 'images/solar-project.svg',
            thumbnails: [
                'images/solar-project.svg',
                'images/wind-project.svg',
                'images/biochar-project.svg'
            ],
            description: 'This 50MW solar farm project in rural Kenya provides clean, renewable electricity to over 30,000 households and businesses that previously relied on diesel generators or had no electricity access. The project reduces carbon emissions while creating jobs and supporting community development initiatives in education and healthcare.',
            impact: {
                trees: '50,000',
                co2: '850,000 tonnes',
                communities: '8'
            },
            certificationInfo: 'This project is certified by Gold Standard, ensuring it meets the highest levels of environmental integrity and contributes to sustainable development. The certification includes rigorous monitoring and verification processes.'
        },
        'Direct Air Capture (DAC)': {
            id: 'dac-iceland',
            title: 'Direct Air Capture (DAC)',
            location: 'Iceland',
            certification: 'puro',
            price: '$275.00',
            available: '15,000 tonnes',
            vintage: '2024-2025',
            type: 'Carbon Removal',
            tags: ['Direct Air Capture', 'Permanent Removal', 'Innovative Technology'],
            mainImage: 'images/dac-project.svg',
            thumbnails: [
                'images/dac-project.svg',
                'images/biochar-project.svg',
                'images/amazon-project.svg'
            ],
            description: 'This cutting-edge Direct Air Capture facility in Iceland removes carbon dioxide directly from the atmosphere and permanently stores it underground in basalt rock formations. The technology represents one of the most promising methods for achieving permanent carbon removal at scale, powered entirely by renewable geothermal energy.',
            impact: {
                trees: 'N/A',
                co2: '15,000 tonnes',
                communities: '2'
            },
            certificationInfo: 'This project is certified by Puro.earth, the world\'s first marketplace and standard for engineered carbon removal. The certification ensures that carbon is permanently removed from the atmosphere and stored securely.'
        },
        'Biochar Production': {
            id: 'biochar-project',
            title: 'Biochar Production',
            location: 'United States',
            certification: 'puro',
            price: '$150.00',
            available: '35,000 tonnes',
            vintage: '2023-2024',
            type: 'Carbon Removal',
            tags: ['Biochar', 'Agricultural Waste', 'Soil Health'],
            mainImage: 'images/biochar-project.svg',
            thumbnails: [
                'images/biochar-project.svg',
                'images/amazon-project.svg',
                'images/solar-project.svg'
            ],
            description: 'This biochar project converts agricultural waste into stable carbon that is sequestered in soil for hundreds to thousands of years. By transforming biomass that would otherwise decompose and release CO2, the project achieves carbon removal while improving soil health, water retention, and agricultural productivity.',
            impact: {
                trees: '100,000',
                co2: '35,000 tonnes',
                communities: '5'
            },
            certificationInfo: 'This project is certified by Puro.earth, which specializes in engineered carbon removal certificates. The certification validates the permanence of carbon removal and ensures the biochar meets rigorous quality standards.'
        },
        'Wind Farm Project': {
            id: 'wind-project',
            title: 'Wind Farm Project',
            location: 'Mongolia',
            certification: 'gold-standard',
            price: '$8.50',
            available: '175,000 tonnes',
            vintage: '2022-2023',
            type: 'Renewable Energy',
            tags: ['Wind Energy', 'Clean Power', 'Rural Development'],
            mainImage: 'images/wind-project.svg',
            thumbnails: [
                'images/wind-project.svg',
                'images/solar-project.svg',
                'images/dac-project.svg'
            ],
            description: 'This wind farm project in Mongolia\'s Gobi Desert consists of 25 turbines generating clean electricity for the national grid, displacing coal-fired power generation. The project provides clean energy to remote communities while reducing carbon emissions and creating long-term employment opportunities.',
            impact: {
                trees: '30,000',
                co2: '175,000 tonnes',
                communities: '6'
            },
            certificationInfo: 'This project is certified by Gold Standard, which ensures it delivers measurable climate benefits and contributes to sustainable development in local communities. The certification includes ongoing monitoring and verification.'
        }
    };
    
    // Modal elements
    const modal = document.getElementById('project-detail-modal');
    const modalClose = modal.querySelector('.modal-close');
    const detailTitle = modal.querySelector('.detail-title');
    const detailBadge = modal.querySelector('.detail-badge');
    const detailLocation = modal.querySelector('.detail-location span');
    const detailMainImage = modal.querySelector('.detail-main-image');
    const detailThumbnails = modal.querySelectorAll('.thumbnail');
    const priceValue = modal.querySelector('.price-value');
    const availableValue = modal.querySelector('.available-value');
    const vintageValue = modal.querySelector('.vintage-value');
    const projectTypeValue = modal.querySelector('.project-type-value');
    const detailTags = modal.querySelector('.detail-tags');
    const descriptionContent = modal.querySelector('.detail-description-content');
    const treesPlanted = modal.querySelector('.trees-planted');
    const co2Reduced = modal.querySelector('.co2-reduced');
    const communities = modal.querySelector('.communities');
    const certificationInfo = modal.querySelector('.certification-info');
    const buyNowBtn = modal.querySelector('.buy-now-btn');
    const tabButtons = modal.querySelectorAll('.tab-btn');
    const tabPanes = modal.querySelectorAll('.tab-pane');
    
    // Detail and Buy Button Functionality
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');
    const buyBtns = document.querySelectorAll('.buy-btn');
    
    // Open modal with project details
    function openProjectDetail(projectName) {
        // Get project data
        const project = projectsData[projectName];
        if (!project) return;
        
        // Populate modal with project data
        detailTitle.textContent = project.title;
        detailBadge.className = `detail-badge ${project.certification}`;
        detailBadge.textContent = project.certification === 'verra' ? 'Verra' : 
                                project.certification === 'gold-standard' ? 'Gold Standard' : 'Puro.earth';
        detailLocation.textContent = project.location;
        detailMainImage.src = project.mainImage;
        detailMainImage.alt = project.title;
        
        // Update thumbnails
        detailThumbnails.forEach((thumb, index) => {
            if (project.thumbnails[index]) {
                thumb.src = project.thumbnails[index];
                thumb.style.display = 'block';
            } else {
                thumb.style.display = 'none';
            }
        });
        
        // Update project stats
        priceValue.textContent = project.price + ' per tonne';
        availableValue.textContent = project.available;
        vintageValue.textContent = project.vintage;
        projectTypeValue.textContent = project.type;
        
        // Update tags
        detailTags.innerHTML = '';
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'detail-tag';
            tagElement.textContent = tag;
            detailTags.appendChild(tagElement);
        });
        
        // Update description and impact
        descriptionContent.textContent = project.description;
        treesPlanted.textContent = project.impact.trees;
        co2Reduced.textContent = project.impact.co2;
        communities.textContent = project.impact.communities;
        
        // Update certification info
        certificationInfo.textContent = project.certificationInfo;
        
        // Update buy button
        buyNowBtn.setAttribute('data-project', project.id);
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent body scrolling
    }
    
    // Close modal
    function closeProjectDetail() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore body scrolling
    }
    
    // Event listeners for detail buttons
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectName = this.closest('.listing-card').querySelector('h3').textContent;
            openProjectDetail(projectName);
        });
    });
    
    // Close modal when clicking the close button
    modalClose.addEventListener('click', closeProjectDetail);
    
    // Close modal when clicking outside of it
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProjectDetail();
        }
    });
    
    // Thumbnail gallery functionality
    detailThumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Update main image
            detailMainImage.src = this.src;
            
            // Update active thumbnail
            detailThumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Tab functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected tab pane
            tabPanes.forEach(pane => {
                if (pane.getAttribute('data-tab') === tabId) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });
    
    // Initialize the default active tab
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
        if (tabPanes.length > 0) {
            tabPanes[0].classList.add('active');
        }
    }
    
    // Buy functionality for the detail modal
    buyNowBtn.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        alert(`Purchasing credits from project ID: ${projectId}. This would open a purchase flow.`);
    });
    
    buyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectName = this.closest('.listing-card').querySelector('h3').textContent;
            const price = this.closest('.listing-card').querySelector('.price-value').textContent;
            alert(`Initiating purchase for: ${projectName} at ${price} per tonne`);
            // In a real implementation, this would open a purchase flow
        });
    });
    
    // Filter Functionality
    const projectTypeSelect = document.getElementById('project-type');
    const certificationSelect = document.getElementById('certification');
    const locationSelect = document.getElementById('location');
    const sortBySelect = document.getElementById('sort-by');
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');
    
    // Simulated filter function
    function applyFilters() {
        // In a real implementation, this would filter the actual data
        console.log('Applying filters:');
        console.log('Project Type:', projectTypeSelect.value);
        console.log('Certification:', certificationSelect.value);
        console.log('Location:', locationSelect.value);
        console.log('Sort By:', sortBySelect.value);
        console.log('Search Term:', searchInput.value);
        
        // Example showing/hiding cards - in a real app, this would be more sophisticated
        document.querySelectorAll('.listing-card').forEach(card => {
            // Simulate filtering - in a real app this would check against actual data
            // Here, we'll just randomly show/hide cards for demonstration
            card.style.display = 'block';
        });
    }
    
    // Add event listeners to filters
    if (projectTypeSelect) projectTypeSelect.addEventListener('change', applyFilters);
    if (certificationSelect) certificationSelect.addEventListener('change', applyFilters);
    if (locationSelect) locationSelect.addEventListener('change', applyFilters);
    if (sortBySelect) sortBySelect.addEventListener('change', applyFilters);
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            applyFilters();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyFilters();
            }
        });
    }
    
    // Pagination Functionality
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            paginationBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            if (!this.classList.contains('next')) {
                this.classList.add('active');
                console.log('Navigating to page:', this.textContent);
                // In a real implementation, this would load the appropriate page of results
            } else {
                // Handle next button click
                const activePage = document.querySelector('.pagination-btn.active');
                const nextPage = [...paginationBtns].indexOf(activePage) + 1;
                
                if (nextPage < paginationBtns.length - 1) {
                    paginationBtns[nextPage].classList.add('active');
                    console.log('Navigating to next page:', paginationBtns[nextPage].textContent);
                    // In a real implementation, this would load the next page of results
                }
            }
        });
    });
});
