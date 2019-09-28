# Clarify UI #
A set of javascript and CSS libraries for simplifying UI design.

Clarify UI has three components for interactions: a menu, a modal box, a disabled class, and a confirmation dialog. Each of the components is controlled by a javascript function.

Clarify UI also has support for dark and light themes by including the appropriate CSS file.

## Menu ##

The menu component can be used by the clarifyMenu function.

#### Menu Syntax ####

    clarifyMenu(openNode,htmlContent,width,direction);
    
The openNode parameter specifies the html element to serve as the button to open the menu.

The htmlContent parameter specifies the html content of the menu.

The width parameter specifies the width of the menu in pixels.

The direction parameter specifies the direction for the menu to slide in from. Possible values are "right" and "left".

#### Example Usage ####

    var openButton = document.getElementById("button");
    
    clarifyMenu(openButton, "<h1>Title</h1> <h2>Subcontent</h2>", 400, "left");
    
## Modal ##

The modal component is used as a javascript function which opens a modal box.

#### Modal Syntax ####

    clarifyModal(htmlContent);

The htmlContent parameter specifies the html content of the modal.

The closeModals function closes all open modals.

#### Example Usage ####

    clarifyModal("<h1>Example text</h1>");

## Confirm ##

The confirm component can be used with the clarifyConfirm function to create a confirmation box.

#### Confirm Syntax ####

    clarifyConfirm(htmlContent, confirmed, rejected);
    
The htmlContent parameter specifies the html content of the confirm box.

The confirmed parameter is a callback function which is called when the confirmation button is pressed.

The rejected parameter is a callback function which is called when the rejection button is pressed or when the confirmation dialog is closed.

#### Example Usage ####

    clarifyConfirm("<h1>Yes or no?</h1>",confirmedFunction, rejectedFunction);

## Disabled ##

The disabled CSS class prevents mouse events on an element and provides disabled styling.

#### Example Usage ####

    <button class="disabled">Unclickable</button>
