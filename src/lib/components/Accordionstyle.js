const style = `
            .detailsWrapper.collapsed{
            display:none;
            }
            .detailsWrapper:not(.collapsed){
                display: unset;
            }
            .titleWrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
         }
         .titleWrapper:hover{
            cursor:pointer;
         }
            .buttonWrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
            .buttonWrapper span.vertical{
                transform: translate(-2px, -2px);
                transition: 2s;
            }
            .buttonWrapper:not(.collapsed) .vertical {
            transform: rotate(135deg);
            }
            .buttonWrapper span.horizontal{
                transform: translate(-13px, -3px);
            }
            .buttonWrapper span.vertical::after {
            content: "|";
            font-size: 14px;
            font-weight: 900;
        }
            .buttonWrapper span.horizontal::after {
            content: "-";
            font-size: 33px;
            font-weight: 900;
        }`;
export default style;