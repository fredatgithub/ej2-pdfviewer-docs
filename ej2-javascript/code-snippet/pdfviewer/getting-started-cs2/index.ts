

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, 
         ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, 
                  BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer );

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl='https://cdn.syncfusion.com/ej2/25.1.35/dist/ej2-pdfviewer-lib';
pdfviewer.appendTo('#PdfViewer');


