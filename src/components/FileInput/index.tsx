import React, { forwardRef, useState } from 'react';
import { StyledFileInput, StyledInputWrapper, StyledInputError, StyledFiles, StyledFileInputProps } from './styles';
import { Label } from '../Label';
import { Button } from '../Button';
import { Icon } from '../Icon';

type Ref = HTMLInputElement;

type FileInputProps = StyledFileInputProps & {
  label?: string;
}

const FileInputComponent: React.FC<FileInputProps> = ({ ref, label = "Upload Files", floating, type = 'file', color = "primary", ...props }) => {
  const [files, setFiles] = useState<string[]>();

  const proxyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;
    const files: FileList | null = event.target.files;

    if (files && files.length) {
      const fileNames: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);

        if (file) {
          fileNames.push(file.name);
        }
      }

      setFiles(fileNames)
    }

    if (onChange) {
      onChange(event);
    }
  }

  const removeFile = (index: number) => {
    if (files) {
      const prevFiles = files.slice();
      prevFiles.splice(index, 1);
      setFiles(prevFiles);
    }
  }

  return (
    <StyledInputWrapper color={color}>
      <StyledFileInput color={color} type={type} {...props} onChange={(e: React.ChangeEvent<HTMLInputElement>) => proxyChange(e)}/>
      {label &&
        <>
          <Label htmlFor={props.id} aria-label={props.id}>
            <Icon icon={
              <svg viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33203 6.23077L5.4987 2M5.4987 2L9.66537 6.23077M5.4987 2L5.4987 10" />
                <line x1="9.5" y1="14" x2="9.5" y2="12" />
                <line x1="1.5" y1="14" x2="1.5" y2="12" />
                <line x1="1" y1="13.5" x2="10" y2="13.5" />
              </svg>
            } />
            {label}
          </Label>
        </>
      }
      {props.error && <StyledInputError>{props.error}</StyledInputError>}

      {files &&
        <StyledFiles>
        {files.map((file: string, index: number) => (
          <li key={index}>
            <span>{file}</span>
            <Button onClick={() => removeFile(index)} fill="clear" iconOnly={<i>&times;</i>} />
          </li>
        ))}
      </StyledFiles>
      }
    </StyledInputWrapper>
  );
}

export const FileInput = forwardRef<Ref, FileInputProps>((props, ref) => (
  <FileInputComponent ref={ref} {...props} />
))

export { StyledFileInput, FileInputProps };
