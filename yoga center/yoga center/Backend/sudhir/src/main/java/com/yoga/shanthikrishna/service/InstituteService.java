package com.yoga.shanthikrishna.service;
import com.yoga.shanthikrishna.dto.InstitueDto;
import java.util.List;
public interface InstituteService {

    InstitueDto createInstitute(InstitueDto collegeDTO);

    InstitueDto getInstituteById(Long instituteId);

    List<InstitueDto> getAllInstitutes();

    InstitueDto updateInstitute(Long instituteId, InstitueDto collegeDto);

    void deleteInstitute(Long instituteId);

}
