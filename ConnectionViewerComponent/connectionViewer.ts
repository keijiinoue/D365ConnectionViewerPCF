export class ConnectionViewer {
    // Div element created as part of this control's main container
    private mainContainer: HTMLDivElement;

    constructor() {

    }

    public init(mainContainer: HTMLDivElement, entityName: string, entityId: string): void {
        console.log("2 init() in ConnectionViewer")

        this.mainContainer = mainContainer;
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }

        let div = document.createElement("div");
        div.innerText = `ConnectionViewer の表示です。 entityName = ${entityName}, entityId = ${entityId}`;
        this.mainContainer.appendChild(div);
    }
}