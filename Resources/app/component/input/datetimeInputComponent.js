(function (namespace, app, globals) {

    namespace.dateTimeInputComponent = app.newClass({
        extend: function () {
            return app.core.component.input.abstractInputComponent;
        }
    });

    namespace.dateTimeInputComponent.prototype.validators = {};

    namespace.dateTimeInputComponent.prototype.getTemplate = function () {
        var tmplString = app.utils.getString(function () {
            //@formatter:off
            /**<string>
             <xv-datetime-input class="event-insert">
                <label>
                    <span class="label fcolor-after"></span>
                    <div>
                        <input type="text" class="input" value="">
                    </div>
                </label>
             </xv-datetime-input>
             </string>*/
            //@formatter:on
        });
        return $(tmplString);
    };

    namespace.dateTimeInputComponent.prototype.getDefaultParams = function () {
        return {
            minDate : false,
            maxDate: false,
            lang : "en"
        };
    };



    namespace.dateTimeInputComponent.prototype.prepare = function () {
        this._formatTime = 'H:i';
        this._formatDate = 'Y-m-d';
        this._format = this._formatDate + " "+this._formatTime;
        this._momentFormat = 'YYYY-MM-DD HH:mm';
        this.initEvents();

        this.setMinDate(this.params.minDate);
        this.setMaxDate(this.params.maxDate);

    };



    namespace.dateTimeInputComponent.prototype.show = function () {
        this.$element.addClass("show");
    };



    namespace.dateTimeInputComponent.prototype.setValue = function (value) {
        value = this._convert(value);
        this.$input.val(value ? value.format(this._momentFormat) : "");
        return true;
    };

    namespace.dateTimeInputComponent.prototype._convert = function(value){
        if(value){
            return (globals.moment(value));
        }

        return null;
    };


    namespace.dateTimeInputComponent.prototype.getValue = function () {
        var val = this.$input.val();
        if(!val){
            return null;
        }

        return globals.moment(val, this._momentFormat).format();
    };




    namespace.dateTimeInputComponent.prototype.setMinDate = function (minDate) {
        value = this._convert(minDate);
        value = value ? value.format('YYYY-MM-DD') : false;

        this.$input.datetimepicker({
            minDate : value
        });

        return this;
    };



    namespace.dateTimeInputComponent.prototype.setMaxDate = function (maxDate) {
        value = this._convert(maxDate);
        value =  value ? value.format('YYYY-MM-DD') : false;

        this.$input.datetimepicker({
            maxDate :  value
        });

        return this;
    };



    namespace.dateTimeInputComponent.prototype.setLang = function (lang) {

        this.$input.datetimepicker({
            lang :  lang
        });

        return this;
    };



    namespace.dateTimeInputComponent.prototype.initEvents = function () {
        var self = this;
        this.$input.datetimepicker({
            format: this._format,
            formatDate: this._formatDate,
            allowBlank : !this.isRequired(),
            lang : this.params.lang,
            step: 15
        });


        this.$input.on("click", function(){
            self.show();
        });

        this.$input.on("change", function(){
            self.onInput();
        });

        return this;
    };



    return namespace.dateTimeInputComponent;
})(__ARGUMENT_LIST__);