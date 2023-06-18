import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';

import "./PdfViewer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();



const PdfViewer = ({ pdf }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );

    return (
        <div>
            <nav className='flex my-4 items-center justify-between'>
                <button className='bg-gray-800 text-white border-none  p-4 list-none text-xl rounded-sm cursor-pointer' onClick={goToPrevPage}>Prev</button>
                <button className='bg-gray-800 text-white border-none  p-4 list-none text-xl rounded-sm cursor-pointer' onClick={goToNextPage}>Next</button>
                <p className='bg-gray-800 text-white'>
                    Page {pageNumber} of {numPages}
                </p>
            </nav>

            {/* <div className="w-full flex justify-center items-center bg-gray-200">
                <div className="w-full max-w-screen-sm p-4 bg-white shadow-lg overflow-hidden">
                    <Document
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onContextMenu={(e) => e.preventDefault()}
                        className="pdf-container"
                    >
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div> */}
            <iframe className='w-full min-h-screen' src={pdf}></iframe>
        </div>
    );
}

export default PdfViewer