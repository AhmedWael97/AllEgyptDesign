    var items = [
                    {
                        id: 1,
                        color: 'green',
                        publishedDate: '2015-10-03'
                    },
                    {
                        id: 2,
                        color: 'green',
                        publishedDate: '2015-12-22'
                    },
                    {
                        id: 3,
                        color: 'blue',
                        publishedDate: '2016-02-15'
                    },
                    {
                        id: 4,
                        color: 'pink',
                        publishedDate: '2016-04-25'
                    },
                    {
                        id: 5,
                        color: 'green',
                        publishedDate: '2016-05-02'
                    },
                    {
                        id: 6,
                        color: 'blue',
                        publishedDate: '2016-10-07'
                    },
                    {
                        id: 7,
                        color: 'pink',
                        publishedDate: '2016-11-13'
                    },
                    {
                        id: 8,
                        color: 'blue',
                        publishedDate: '2016-12-01'
                    }
                ];

                // The `Api` class is not part of MixItUp and has been created to mock
                // the asyncronous fetching of data for this demo. To use it, we must
                // create an api instance, passing in our mock data to represent the
                // contents of a DB.

                var api = new Api(items);

                // As we'll be building and binding our own UI, we'll start with caching
                // references to any DOM elements we'll need to work with

                var controls  = document.querySelector('[data-ref="controls"]');
                var filters   = document.querySelectorAll('[data-ref="filter"]');
                var sorts     = document.querySelectorAll('[data-ref="sort"]');
                var container = document.querySelector('[data-ref="container"]');

                // "Gap" elements are used to maintain even columns in a justified grid. See our
                // "MixItUp Grid Layouts" tutorial for more information.

                var firstGap = document.querySelector('[data-ref="first-gap"]');

                // We'll need to keep track of our active current filter so
                // that we can sort within the current filter.

                var activeColor = '';

                // Instantiate and configure the mixer

                var mixer = mixitup(container, {
                    selectors: {
                        target: '[data-ref="item"]' // Query targets with an attribute selector to keep our JS and styling classes seperate
                    },
                    layout: {
                        siblingAfter: firstGap // Ensure the first "gap" element is known to mixitup incase of insertion into an empty container
                    },
                    data: {
                        uidKey: 'id' // Our data model must have a unique id. In this case, its key is 'id'
                    },
                    render: { // We must provide a target render function incase we need to render new items not in the initial dataset (not used in this demo)
                        target: function(item) {
                            return '<div class="item ' + item.color + '" data-ref="item"><time class="published-date">' + item.publishedDate + '</time></div>';
                        }
                    }
                });

                /**
                 * A helper function to set an active styling class on an active button,
                 * and remove it from its siblings at the same time.
                 *
                 * @param {HTMLElement} activeButton
                 * @param {HTMLELement[]} siblings
                 * @return {void}
                 */

                function activateButton(activeButton, siblings) {
                    var button;
                    var i;

                    for (i = 0; i < siblings.length; i++) {
                        button = siblings[i];

                        button.classList[button === activeButton ? 'add' : 'remove']('control-active');
                    }
                }

                /**
                 * A click handler to detect the type of button clicked, read off the
                 * relevent attributes, call the API, and trigger a dataset operation.
                 *
                 * @param   {HTMLElement} button
                 * @return  {void}
                 */

                function handleButtonClick(button) {
                    // Define default values for color, sortBy and order
                    // incase they are not present in the clicked button

                    var color  = activeColor;
                    var sortBy = 'id';
                    var order  = 'asc';

                    // If button is already active, or an operation is in progress, ignore the click

                    if (button.classList.contains('control-active') || mixer.isMixing()) return;

                    // Else, check what type of button it is, if any

                    if (button.matches('[data-ref="filter"]')) {
                        // Filter button

                        activateButton(button, filters);

                        color = activeColor = button.getAttribute('data-color');
                    } else if (button.matches('[data-ref="sort"]')) {
                        // Sort button

                        activateButton(button, sorts);

                        sortBy = button.getAttribute('data-key');
                        order = button.getAttribute('data-order');
                    } else {
                        // Not a button

                        return;
                    }

                    // Now that we have our color filter and sorting order, we can fetch some data from the API.

                    api.get({
                        color: color,
                        $sort_by: sortBy,
                        $order: order
                    })
                        .then(function(items) {
                            // Our api returns an array of items which we can send
                            // straight to our mixer using the .dataset() method

                            return mixer.dataset(items);
                        })
                        .then(function(state) {
                            console.log('fetched ' + state.activeDataset.length + ' items');
                        })
                        .catch(console.error.bind(console));
                }

                // We can now set up a handler to listen for "click" events on our UI buttons

                controls.addEventListener('click', function(e) {
                    handleButtonClick(e.target);
                });

                // Set controls the active controls on startup to match the default filter and sort

                activateButton(controls.querySelector('[data-color="all"]'), filters);
                activateButton(controls.querySelector('[data-order="asc"]'), sorts);

                // Finally, load the full dataset into the mixer

                mixer.dataset(items)
                    .then(function(state) {
                        console.log('loaded ' + state.activeDataset.length + ' items');
                    });

                // NB: Always remember to destroy the instance with mixer.destroy() when your
                // component unmounts to ensure that event handlers are unbound and the
                // instance can be garbage collected.