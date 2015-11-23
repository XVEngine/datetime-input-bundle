<?php

namespace XVEngine\Bundle\DateTimeInputBundle\Component\Input;
use XVEngine\Core\Component\Input\AbstractInputComponent;


/**
 * Class DateTimeInputComponent
 * @author Krzysztof Bednarczyk
 * @package XVEngine\Bundle\DateTimeInputBundle\Component\Input
 */
class DateTimeInputComponent extends AbstractInputComponent
{

    public function initialize()
    {
        $this->setComponentName('input.dateTimeInputComponent');
        parent::initialize();
    }


    /**
     * @author Krzysztof Bednarczyk
     * @param $value
     * @return $this
     */
    public function setPlaceholder($value)
    {
        return $this->setParam("placeholder", $value);
    }


    /**
     * @author Krzysztof Bednarczyk
     * @param bool|false $max
     * @return $this
     */
    public function setMaxDate($max = false)
    {
        return $this->setParam("maxDate", $max);
    }


    /**
     * @author Krzysztof Bednarczyk
     * @param bool|false $max
     * @return $this
     */
    public function setMinDate($max = false)
    {
        return $this->setParam("minDate", $max);
    }


    /**
     * @author Krzysztof Bednarczyk
     * @param string $lang
     * @return $this
     */
    public function setLang($lang = 'en')
    {
        return $this->setParam("lang", $lang);
    }


}