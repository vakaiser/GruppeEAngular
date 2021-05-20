package at.htlgkr.dto2.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
public class Dto2InternalServerErrorException extends RuntimeException {
    public Dto2InternalServerErrorException(String message) {
        super(message);
    }
}
