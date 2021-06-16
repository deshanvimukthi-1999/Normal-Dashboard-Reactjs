import React from 'react';
import "./topbar.css";
import { NotificationsNone, MailOutline, SearchSharp } from '@material-ui/icons';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAA+CAYAAABJPdVyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU1OENCNjFCQUQ1NzExRUFBOTRBRjJBMUYwMzk5QTI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU1OENCNjFDQUQ1NzExRUFBOTRBRjJBMUYwMzk5QTI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTU4Q0I2MTlBRDU3MTFFQUE5NEFGMkExRjAzOTlBMjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTU4Q0I2MUFBRDU3MTFFQUE5NEFGMkExRjAzOTlBMjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6G75RRAAAMgElEQVR42uxd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"
                            alt="image foodtch" />
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <div class="search">
                            <form action="#">
                                <input type="text"
                                    placeholder=" Search here..."
                                    name="search" />
                                <button>
                                    <SearchSharp />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <MailOutline />
                        <span className="topIconBadge">2</span>
                    </div>
                    <img src="http://slidesigma.nyc/templatemonster/react/foodtech/static/media/customer-1.41c0170d.jpg"
                        alt="avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}
