import React from "react";
import Details from '@theme/Details';

export default function PdfViewer({ file = "/pdfs/demo.pdf" }) {
  return (
    <Details summary="Условия задачи">
      <object data={file+"#toolbar=0&navpanes=0&scrollbar=0"}  type="application/pdf" width="100%" height="800">
          <p>Увы, твой браузер не отображает PDF файлы</p>
        <a target="\_blank" href={file} className="button button--primary button--lg">Скачать</a>
      </object>
      </Details>
  );
}
