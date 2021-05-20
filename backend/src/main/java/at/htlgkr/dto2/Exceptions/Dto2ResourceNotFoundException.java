package at.htlgkr.dto2.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class Dto2ResourceNotFoundException extends RuntimeException {
    public Dto2ResourceNotFoundException(String message)
    {
        super(message);
    }
}
