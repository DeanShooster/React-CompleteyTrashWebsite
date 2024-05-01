import { useEffect, useRef } from "react";

import "./index.scss";

export const MouseNotebook = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas?.getContext("2d");

    let isDrawing = false,
      lastX = 0,
      lastY = 0;

    const startDrawing = (event: MouseEvent) => {
      if (!canvas) return;
      isDrawing = true;
      const bounds = canvas.getBoundingClientRect();
      lastX = event.clientX - bounds.left;
      lastY = event.clientY - bounds.top;
    };

    const draw = (event: MouseEvent) => {
      if (!isDrawing || !context || !canvas) return;

      const bounds = canvas.getBoundingClientRect();
      const currentX = event.clientX - bounds.left;
      const currentY = event.clientY - bounds.top;

      context.strokeStyle = "white";
      context.lineWidth = 2;

      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(currentX, currentY);
      context.stroke();

      lastX = currentX;
      lastY = currentY;
    };

    const stopDrawing = () => (isDrawing = false);

    canvas?.addEventListener("mousedown", startDrawing);
    canvas?.addEventListener("mousemove", draw);
    canvas?.addEventListener("mouseup", stopDrawing);
    canvas?.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas?.removeEventListener("mousedown", startDrawing);
      canvas?.removeEventListener("mousemove", draw);
      canvas?.removeEventListener("mouseup", stopDrawing);
      canvas?.removeEventListener("mouseout", stopDrawing);
    };
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (context) context.clearRect(0, 0, canvas!.width, canvas!.height);
  };

  return (
    <div className="draw-container">
      <canvas ref={canvasRef} width={500} height={600} />
      <button onClick={clearCanvas}>Clear Board</button>
    </div>
  );
};
