class OrderModel{
    constructor(id, title, chapterStart, chapterFinish,  type, dtc) {
        this._title = title;
        this._chapterStart = chapterStart;
        this._chapterFinish = chapterFinish;
        this._type = type;
        this._dtc = dtc;
        this._id = id;
    }

    get id(){
        return this._id;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get chapterStart() {
        return this._chapterStart;
    }

    set chapterStart(value) {
        this._chapterStart = value;
    }

    get chapterFinish() {
        return this._chapterFinish;
    }

    set chapterFinish(value) {
        this._chapterFinish = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get dtc() {
        return this._dtc;
    }

    set dtc(value) {
        this._dtc = value;
    }

}