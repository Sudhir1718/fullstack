package com.yoga.shanthikrishna.service.impl;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.yoga.shanthikrishna.dto.InstitueDto;
import com.yoga.shanthikrishna.entity.Institue;
import com.yoga.shanthikrishna.exception.InstituteNotFoundException;
import com.yoga.shanthikrishna.mapper.InstitueMapper;
import com.yoga.shanthikrishna.repository.InstitueRepo;
import com.yoga.shanthikrishna.service.InstituteService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class InstititeServiceImpl implements InstituteService {

    private final InstitueRepo collegeRepo;

    @Override
    public InstitueDto createInstitute(InstitueDto collegeDto) {
        Institue college = InstitueMapper.mapToCollege(collegeDto);
        Institue savedCollege = collegeRepo.save(college);
        return InstitueMapper.mapToCollegeDto(savedCollege);
    }

    @Override
    public InstitueDto getInstituteById(Long instituteId) {
        Optional<Institue> optionalCollege = collegeRepo.findById(instituteId);
        Institue college = optionalCollege.orElseThrow(() ->
                new InstituteNotFoundException("College not found with id: " + instituteId));
        return InstitueMapper.mapToCollegeDto(college);
    }

    @Override
    public List<InstitueDto> getAllInstitutes() {
        List<Institue> institutes = collegeRepo.findAll();
        return institutes.stream()
                .map(InstitueMapper::mapToCollegeDto)
                .collect(Collectors.toList());
    }

    @Override
    public InstitueDto updateInstitute(Long instituteId, InstitueDto collegeDto) {
        Optional<Institue> optionalCollege = collegeRepo.findById(instituteId);
        Institue existingCollege = optionalCollege.orElseThrow(() ->
                new InstituteNotFoundException("College not found with id: " + instituteId));

        // Update fields with values from CollegeDto
        existingCollege.setInstituteName(collegeDto.getInstituteName());
        existingCollege.setInstituteDescription(collegeDto.getInstituteDescription());
        existingCollege.setInstituteAddress(collegeDto.getInstituteAddress());
        existingCollege.setMobile(collegeDto.getMobile());
        existingCollege.setEmail(collegeDto.getEmail());
        // Update other fields as needed

        // Save the updated entity back to the repository
        Institue updatedCollege = collegeRepo.save(existingCollege);
        return InstitueMapper.mapToCollegeDto(updatedCollege);
    }

    @Override
    public void deleteInstitute(Long instituteId) {
        collegeRepo.deleteById(instituteId);
    }
    // Other methods for updating, deleting, etc. can be added as needed
}
