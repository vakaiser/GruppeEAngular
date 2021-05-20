package at.htlgkr.dto2.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class Dto2BadRequestException extends RuntimeException {
    public Dto2BadRequestException(String message) {
        super(message);
    }
}
